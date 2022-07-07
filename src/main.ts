import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import enviroment from 'env';
import { fastifyHelmet } from 'fastify-helmet';
import { AppModule } from './app.module';

/**
 * It creates a new Nest application, sets the global prefix to api, enables versioning, enables CORS,
 * registers the helmet plugin, and finally starts the application on the port specified in the
 * environment file
 */
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle(enviroment.APP_NAME)
    .addBearerAuth()
    .setDescription(enviroment.APP_DESCRIPTION)
    .setVersion(enviroment.APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(enviroment.APP_DOCUMENTATION_PATH, app, document);

  app.enableCors();
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });
  // await app.register(fastifyCsrf);
  await app.listen(enviroment.APP_PORT);
}
bootstrap();

import { Application } from './config/app';

Application.createApplication().then(() => {
  console.info('The application was started! Kill it using Ctrl + C');
});

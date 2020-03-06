import global from './global';
import setting from './setting';
import account from './account';

// system
import systemUser from '../pages/System/models/systemUser'

export default (app) => {
  app.model(global)
  app.model(setting)
  app.model(account)
  app.model(systemUser)
}
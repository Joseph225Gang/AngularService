import { UserService} from './user.service';
import { AdminService} from './admin.service';

export const dataServiceFactory = (configValue: number) => {
    if (configValue >= 5) {
      return new AdminService();
    } else {
      return new UserService();
    }
  }

export let constValue;

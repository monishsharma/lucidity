import baseApi from "./baseApi";
import commonApi from "./common";
import adminApi from "./admin";
import usersApi from "./users";

const common = commonApi(baseApi);
const users = commonApi(usersApi);
const admin = commonApi(adminApi);

export {
    baseApi,
    common as commonService,
    users as usersService,
    admin as adminService
};

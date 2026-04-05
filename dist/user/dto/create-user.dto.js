"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    id;
    name;
    email;
    password;
    phone;
    role;
    created_at;
    constructor(createUserDto) {
        Object.assign(this, createUserDto);
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
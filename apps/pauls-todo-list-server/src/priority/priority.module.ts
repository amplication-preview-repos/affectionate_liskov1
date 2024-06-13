import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PriorityModuleBase } from "./base/priority.module.base";
import { PriorityService } from "./priority.service";
import { PriorityController } from "./priority.controller";
import { PriorityResolver } from "./priority.resolver";

@Module({
  imports: [PriorityModuleBase, forwardRef(() => AuthModule)],
  controllers: [PriorityController],
  providers: [PriorityService, PriorityResolver],
  exports: [PriorityService],
})
export class PriorityModule {}

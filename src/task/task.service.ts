import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor() {}
  @Cron('2 * * * * *')
  handleCron() {
    this.logger.log('cron job running');
  }
}

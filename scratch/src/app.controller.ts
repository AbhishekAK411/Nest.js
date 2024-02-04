import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hi")
  getRootRoute() {
    return "Hi";
  }

  @Get('/bye')
  getByeThere() {
    return "Bye";
  }
}

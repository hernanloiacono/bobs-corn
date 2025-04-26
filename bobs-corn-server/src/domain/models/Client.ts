export class Client {
    constructor(
      public id: number | null,
      public ip: string,
      public lastPurchase: Date | null = null
    ) {}
  }
  
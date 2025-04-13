export class TaskIsDone {
  value: boolean;

  constructor(value: boolean) {
    this.value = this.stringToBoolean(value.toString());
    this.ensureValidationIsDone();
  }

  private ensureValidationIsDone(): void {
    if (typeof this.value !== "boolean") {
      throw new Error("isDone must be a boolean value.");
    }
  }

  stringToBoolean = (stringValue: string) => {
    switch (stringValue?.toLowerCase()?.trim()) {
      case "true":
      case "yes":
      case "1":
        return true;

      case "false":
      case "no":
      case "0":
      case null:
      case undefined:
        return false;

      default:
        return JSON.parse(stringValue);
    }
  };
}

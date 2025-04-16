import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressLoanRouter } from "./lib/Loan/infrastucture/ExpressLoanRouter";
import { ExpressPayRouter } from "./lib/Pay/infrastructure/ExpressPayRouter";
import { ExpressTaskRouter } from "./lib/Task/infrastructure/ExpressTaskRouter";
import { ExpressCustomerRouter } from "./lib/customer/infrastucture/EspressCustomerRouter";

const app = express();
app.use(express.json());
app.use(ExpressLoanRouter);
app.use(ExpressPayRouter);
app.use(ExpressTaskRouter);
app.use(ExpressCustomerRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

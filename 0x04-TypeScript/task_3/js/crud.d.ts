import { deleteRow } from "./crud";
import { RowElement, RowID } from "./interface";
type insertRow = (param: RowElement) => number;
type deleteRow = (param: RowID) => null;
type updateRow = (param: RowID) => number;
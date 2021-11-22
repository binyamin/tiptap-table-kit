import { Extension } from "@tiptap/core";
import {Table,TableOptions} from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableHeader from "@tiptap/extension-table-header"
import TableCell from "@tiptap/extension-table-cell"

/**
 * @typedef TableKitOptions
 * @property {TableOptions} table
 */

/**
 * @summary Note: "TableHeader" controls footers and header-columns, in addition to header-rows
 * @todo Add caption
 * @type {Extension<TableKitOptions>}
 */
const TableKit = Extension.create({
    name: "TableKit",
    addExtensions() {
        return [
            Table,
            TableRow,
            TableHeader,
            TableCell
        ]
    }
})

export default TableKit;

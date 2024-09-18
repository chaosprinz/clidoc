import { title } from 'process'

/**
 * A table component.
 *
 * @param {string[]} headTitles - The titles of the table columns.
 * @param {string} [className] - Additional class names to be applied to the table.
 * @param {React.ReactNode} children - The content of the table body.
 * @param {{[key: string]: any}} [props] - Any other props to be passed to the table element.
 * @returns {JSX.Element} A JSX element representing a table.
 */
export function Table({
  headTitles,
  className,
  children,
  ...props
}: {
  headTitles: string[]
  className?: string
  children: React.ReactNode
}) {
  return (
    <table className={`border-2 border-slate-600 ${className}`} {...props}>
      <thead>
        <TR className="bg-slate-300 dark:bg-slate-700">
          {headTitles.map((title, index) => (
            <TH key={index}>{title}</TH>
          ))}
        </TR>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

/**
 * A table header component.
 *
 * @param {React.ReactNode} children - The content of the table header.
 * @param {string} [className] - Additional class names to be applied to the table header.
 * @param {{[key: string]: any}} [props] - Any other props to be passed to the table header element.
 * @returns {JSX.Element} A JSX element representing a table header.
 */
export function TH({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <th className={`border-r-2 border-slate-600 p-2 ${className}`} {...props}>
      {children}
    </th>
  )
}

/**
 * A table data component.
 *
 * @param {React.ReactNode} children - The content of the table data.
 * @param {string} [className] - Additional class names to be applied to the table data.
 * @param {{[key: string]: any}} [props] - Any other props to be passed to the table data element.
 * @returns {JSX.Element} A JSX element representing a table data.
 */
export function TD({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <td className={`border-r-2 border-slate-600 p-2 ${className}`} {...props}>
      {children}
    </td>
  )
}

/**
 * A table row component.
 *
 * @param {React.ReactNode} children - The content of the table row.
 * @param {string} [className] - Additional class names to be applied to the table row.
 * @param {{[key: string]: any}} [props] - Any other props to be passed to the table row element.
 * @returns {JSX.Element} A JSX element representing a table row.
 */
export function TR({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <tr className={`border-b-2 border-slate-600 ${className}`} {...props}>
      {children}
    </tr>
  )
}

/**
 * DottedBorder Component
 *
 * @prop children - Children to be rendered inside the border
 * @prop borderRadius: Radius of the border, defaults to 15px
 *
 * @author Victor Ogunjobi
 *
 */
const DottedBorder = ({ children, borderRadius, classes }) => {
  return (
    <div
      className={`rounded-2xl border-4 border-dashed bg-origin-border border-white ${classes}`}
      style={{ borderRadius }}
    >
      <div className="rounded-[10px] h-full w-full">{children}</div>
    </div>
  );
};

export default DottedBorder;

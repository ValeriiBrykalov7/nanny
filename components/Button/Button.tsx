export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className="bg-blue-500 text-white p-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
}

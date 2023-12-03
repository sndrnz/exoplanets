interface NotFoundProps {
  resource?: string;
}

export default function NotFound({ resource }: NotFoundProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="flex divide-x-large divide-white px-8 text-4xl">
        <span className="pr-4 text-primary">404</span>
        <span className="pl-4">
          {resource ? `${resource} not found` : "Not found"}
        </span>
      </h1>
    </div>
  );
}

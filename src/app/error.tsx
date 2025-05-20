"use client";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        <p className="text-muted-foreground">Please try again later.</p>
      </div>
    </div>
  );
};

export default Error;

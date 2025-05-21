export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-[1445px] mx-auto pt-5 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  }
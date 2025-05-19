export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 max-w-[390px] lg:max-w-6xl">
      {children}
    </section>
  );
}

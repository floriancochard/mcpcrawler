export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 max-w-[390px] lg:max-w-6xl">
      {children}
    </section>
  );
}

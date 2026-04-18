import Image from "next/image";

export default function BranchesSection({ data }) {
    if (!data || !Array.isArray(data)) return null;

    return (
        <section
        id="branches-section"
        className="scroll-mt-28 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12"
        >
        <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900">
            Our Branches
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
            Pretium interdum risus risus facilisis cras pellentesque ipsum
            suspendisse
            </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.map((b) => (
            <article
                key={b.id}
                className="rounded-2xl bg-white transition hover:-translate-y-0.5"
            >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <Image
                    src="/PlaceHolderPic.png"
                    alt={`${b.name} branch`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                </div>

                <div className="pt-4">
                <h3 className="text-xl font-black text-slate-900">{b.name}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {b.address}
                </p>

                <div className="mt-4 space-y-1 text-sm">
                    <p className="font-bold text-slate-900">
                    Phone:{" "}
                    <span className="font-normal text-slate-500">{b.phone}</span>
                    </p>
                    <p className="font-bold text-slate-900">
                    Email:{" "}
                    <span className="font-normal text-slate-500">{b.email}</span>
                    </p>
                </div>
                </div>
            </article>
            ))}
        </div>
        </section>
    );
}
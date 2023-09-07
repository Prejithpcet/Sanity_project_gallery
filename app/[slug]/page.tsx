import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <>
      <div className="max-w-5xl mx-auto py-20">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {page.title}
        </span>
        <div className="text-lg text-gray-700 mt-10">
          <PortableText value={page.content} />
        </div>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import {GET_BY_ID_API} from "@/constants/ApiConstant";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const urlApi = `${GET_BY_ID_API}/?id=${id}`;

  try {
    const response = await fetch(urlApi);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const product = await response.json();

    return {
      title: product.title || 'Default Title',
      description: product.description || 'Default Description',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Error Title',
      description: 'Error Description',
    };
  }
}
export default function DetailProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

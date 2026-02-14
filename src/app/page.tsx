import { MatrixProvider } from "@/core/context/matrix";
import Matrix from "@/components/matrix/Matrix";
import MatrixConfig from "@/components/matrix/MatrixConfig";

export default function Home() {
  return (
    <MatrixProvider>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-6">
        <MatrixConfig />
        <Matrix />
      </div>
    </MatrixProvider>
  );
}

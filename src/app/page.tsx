import ContainerA from "@/containers/ContainerA";
import ContainerB from "@/containers/ContainerB";

export default function Home() {
  return (
    <div className="p-4">
      test
      {/* İlk container */}
      <ContainerA />


      {/* İkinci container */}
      <ContainerB />
    </div>
  );
}

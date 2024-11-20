import { Chip } from "@nextui-org/react";
import { ContentCarousel } from "../../components/ContentCarousel";
import { useContent } from "../../providers/AppProvider/hooks";

export const ViewerHome = () => {
  const allContent = useContent();
  const horror = useContent("horror");
  return (
    <div>
      <h2>All Movies and Series</h2>
      <ContentCarousel items={allContent} />
      <h2>Horror</h2>
      <ContentCarousel
        items={horror}
        renderItem={(item) => {
          return (
            <div>
              <img src={item.thumbnail} />
              <h3>{item.title}</h3>
              <Chip>{item.type}</Chip>
              <div>{item.genre}</div>
            </div>
          );
        }}
      />
    </div>
  );
};

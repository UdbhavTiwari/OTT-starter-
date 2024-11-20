export const CarouselItem = ({ item, render }) => {
  if (render) {
    return render(item);
  }
  return (
    <div>
      <img src={item.thumbnail} />
      <h3>{item.title}</h3>
      <div>{item.type}</div>
      <div>{item.genre}</div>
    </div>
  );
};

type ListItemProps = {
  items: Array<{
    id: number;
    name: string;
    description?: string;
    img: string;
  }>;
  name: string;
};

const ListItems = ({ items, name }: ListItemProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px] scroll_thumb">
      <div className="w-[682px] ">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between mb-4 h-[84px] border p-[16px] rounded-[8px]">
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-[24px] h-[24px] mr-[16px]"
              />
              <div className="space-y-[8px]">
                <div className="text-[14px] leading-5 font-bold text-dark_blue">
                  {item.name}
                </div>
                {item.description && (
                  <div className="text-[14px] leading-5 font-normal text-dark_blue">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
            <input
              type="radio"
              name={name}
              value={item.id}
              className="custom-radio"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ListItems;

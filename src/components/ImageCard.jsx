// export const ImageCard = ({url}) => <div className='inline-block flex-none mx-1 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 hover:overflow-auto'>
// <img src={url} alt="" className='h-40 object-contain rounded-md' />
// </div>
export const ImageCard = ({ url }) => (
  <div className="inline-block flex-none mx-1">
    <img src={url} alt="" className="h-40 object-contain rounded-md " />
  </div>
);

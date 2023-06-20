import save from '../../public/save.svg';
import Image from 'next/image';
import { toggleSave } from '@/redux/saved/saveSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function saveBtn({ itemId }) {
const dispatch = useDispatch();

  function saved() {
     axios.post('/api/saves', { productId: itemId }).then((response) => {
       dispatch(toggleSave(response.data));
      
     });
  }
  return (
    <div
      onClick={saved}
      className="absolute top-2 right-3 bg-white bg-opacity-70 rounded-full p-1 "
    >
      <Image src={save} alt="save icon"></Image>
    </div>
  );
}

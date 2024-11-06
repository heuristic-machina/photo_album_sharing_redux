import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from 'react-icons/go';
import PhotosList from "./PhotosList";

function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }
    const header = (
    <>
        <Button loading={results.isLoading}className='mr-3' onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>
    );
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
            )
}

export default AlbumsListItem;
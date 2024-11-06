import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    // console.log(results);

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    // console.log(isFetching);
    // isFetching set to true reloads every request (seamless)
    // isLoading set to true reloads on first request only (causes awkward pause)

    let content;
    if (isFetching) {
        content = <Skeleton className='h-10 w-full' times={3} />
    } else if (error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album}/>
        });
    }


    return <div>
        <div className='m-2 flex flex-row items-center justify-between'>
            <h3 className="text-lg font-bold">
                Albums for {user.name}
            </h3>
            <Button loading={results.isLoading} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>

}

export default AlbumsList;


// const {data, error, isLoading} = useFetchAlbumsQuery(user);
// console.log(data, error, isLoading);
// console.log(results);
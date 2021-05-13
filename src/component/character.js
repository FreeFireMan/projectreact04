export default function Character({item}) {
    return (
        <div>
            {item.id} -- {item.name && item.name.first}
        </div>
    );
}

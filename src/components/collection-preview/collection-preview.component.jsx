import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({title , items}) => {
    return(
        <div className = 'collection-preview'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <div className = 'preview'>
               { items.filter((items , idx) => idx<4 ).map((items) => (
                    <CollectionItem key = {items.id} item={items}/>
               ))}
            </div>  
        </div>
    );
}
export default CollectionPreview;
import React from 'react'
import HeaderItems from './HeaderItems'


const Header = () => {
    const headerItem = [
        {
            "id":1,
            "thumb": "https://cdn.iconscout.com/icon/premium/png-512-thumb/bakery-64-201196.png?f=avif&w=512",
            "title": "Products",
            "description": "Lorem Ipsum is simply dummy text of the printing."
        },
        {
            "id":2,
            "thumb": "https://cdn.iconscout.com/icon/premium/png-512-thumb/bakery-39-184087.png?f=avif&w=512",
            "title": "Cake Class",
            "description": "Lorem Ipsum is simply dummy text of the printing."
        },
        {
            "id":3,
            "thumb": "https://cdn.iconscout.com/icon/premium/png-512-thumb/bakery-59-201151.png?f=avif&w=512",
            "title": "Recipes",
            "description": "Lorem Ipsum is simply dummy text of the printing."
        }
    ]
    return (
        <div className='header-bg'>
            <header className='container'>
                <div className="row">
                    {headerItem.map((header) => {
                        return (
                            <HeaderItems key={header.id} thumbImg={header.thumb} title={header.title} description={header.description} />
                        )
                    })
                    }
                </div>
            </header>
        </div>
    )
}

export default Header

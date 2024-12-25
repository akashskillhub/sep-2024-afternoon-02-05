import React from 'react'

const ProductDetails = () => {
    return <div className=' min-h-96 grid md:grid-cols-2'>
        <div className='bg-white p-12'>
            <div className='text-gray-600'>
                <span>Travel</span>
                <span className='mx-3'>/</span>
                <span>Bags</span>
            </div>
            <h1 className='text-4xl font-semibold'>Lorem, ipsum dolor.</h1>
            <div className='flex gap-3 my-4'>
                <span className='text-xl'>$220</span>
                <span>|</span>
                <div>
                    <span className='text-orange-400 bi bi-star-fill'></span>
                    <span className='text-orange-400 bi bi-star-fill'></span>
                    <span className='text-orange-400 bi bi-star-fill'></span>
                    <span className='text-orange-400 bi bi-star-fill'></span>
                    <span className='text-gray-400 bi bi-star'></span>
                    <span className='text-gray-400 ml-2'>1624 reviews</span>
                </div>
            </div>
            <div className='text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ad, ratione omnis voluptate cupiditate eaque, ut officiis similique ducimus eveniet excepturi. Totam consequatur recusandae, odio veritatis quae animi sint mollitia?
            </div>
            <div className='flex gap-4 items-center my-4'>
                <span className="text-green-400 text-2xl bi bi-check"></span>
                <span>in Stock and ready to ship</span>
            </div>
            <div className='flex gap-4'>
                <div className='p-6 border border-blue-600 rounded-md flex-1'>
                    <div className='font-semibold'>18 L</div>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='p-6 border border-gray-300 rounded-md flex-1'>
                    <div className='font-semibold'>20 L</div>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='py-4 text-gray-400'>What size should i buy  <span className='text-gray-400 bi bi-question-circle'></span> </div>
            <button className='bg-blue-600 w-full rounded-md p-4 text-gray-100 '>Add to bag</button>
            <div className='text-center my-4 text-gray-500'>
                <span className='bi bi-shield-check me-2'></span>
                <span>Lifetime Gurantee</span>
            </div>
        </div>
        <div className=''>
            <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-featured-product-shot.jpg" alt="" />
        </div>



    </div>
}

export default ProductDetails
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image
      src="/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        &quot;making my next.js project,&quot;
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        wajeeha akhtar
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Studant
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default page
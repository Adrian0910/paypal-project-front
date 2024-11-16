import React, { Fragment } from "react";


export const thanks = () => {

  


  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error...${error.message}`</p>;

  return (
    <div className="grid justify-items-center">
        <div className="text-white  w-4/12  my-20 text-xl">
          <h2 className=" grid justify-items-center text-8xl m-2 p-2 font-mono uppercase">{data.company.name}</h2>
          <p>{data.company.summary}</p>
        </div>
        <div className="grid grid-flow-col space-x-20">
        <section className="w-auto p-2 bg-white rounded-lg font-mono">
          <p>Contact:</p>
          <card className="grid grid-flow-col space-x-4">
            <a href={data.company.links.elon_twitter} target="_blank" rel="noreferrer">Elon Musk<box-icon name='twitter' type='logo' color='rgba(19,171,233,0.72)' ></box-icon></a>
            <a href={data.company.links.twitter} target="_blank" rel="noreferrer">SpaceX<box-icon name='twitter' type='logo' color='rgba(19,171,233,0.72)' ></box-icon></a>
          </card>
          <card className="grid grid-flow-col justify-items-center">
            <a href={data.company.links.website} target="_blank" rel="noreferrer">Web<box-icon name='globe' type='solid' color='#000000'></box-icon></a>
            <a href={data.company.links.flickr} target="_blank" rel="noreferrer">Flickr<box-icon name='image' type='solid' color='#000000' ></box-icon></a>
          </card>
        </section>
          <section className="bg-white rounded-lg w-auto font-mono p-2">
            <p>Headquarter:</p>
            <p>{data.company.headquarters.address}, {data.company.headquarters.city}</p>
            <p>{data.company.headquarters.state}.</p>
          </section>
          </div>
    </div>
  );
};

export default thanks;
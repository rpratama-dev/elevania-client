import { useEffect, useState } from 'react';
import checkImageURL from '../../helper/checkImageURL';

/**
 *
 * @param {{
 *  image: {
 *    image_type: string,
 *    image_url: string,}
 * }} props
 * @returns
 */
export default function CardImage(props) {
  const { image } = props;
  const [imgUrl, setImsgUrl] = useState(image.image_url);

  useEffect(() => {
    checkLogo(image.image_url);
  }, []);

  const checkLogo = (url) => {
    checkImageURL(url, (newUrl) => {
      setImsgUrl(newUrl);
    });
  };

  return (
    <div className="single_team_member">
      <figure>
        <img src={imgUrl} alt="Team Member" />
        <figcaption>
          <div className="name_desig">
            <h4>Tipe</h4>
            <p>{image.image_type}</p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="#s" className="bg-white">
                  <span className="fa fa-edit text-primary" />
                </a>
              </li>
              <li>
                <a href="#s" className="bg-white">
                  <span className="fa fa-trash text-primary" />
                </a>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

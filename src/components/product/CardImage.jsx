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

  return (
    <div className="single_team_member">
      <figure>
        <img src={image.image_url} alt="Team Member" />
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

import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
            <div>
                <h3 className="text-md font-semibold mb-4 ">
                    Resources
                </h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-400 hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer" >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
          
        </div>
    </footer>
  )
}

export default Footer
const currentYear = new Date().getFullYear();

function FooterCopyright() {
  return (
    <p className="text-center text-sm text-gray-500 md:text-base">
      © {currentYear} Flowbite, Inc. All rights reserved.
    </p>
  );
}

export default FooterCopyright;

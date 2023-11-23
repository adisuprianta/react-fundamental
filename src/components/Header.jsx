export default function Header() {
  return (
    <>
      <div
        className="container mt-4 py-4 d-flex justify-content-between"
        style={{ minWidth: '80px' }}
      >
        <div className="font-logo text-center">
          <h1 className="fs-2">Warung Makan</h1>
          <h1 className="text-primary fs-2">Bahari</h1>
        </div>
        <span>
          <i
            className="bi bi-list fs-4 cursor-pointer"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          ></i>
        </span>
      </div>

      <div
        className="offcanvas offcanvas-start bg-background"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end me-5 mt-4">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled p-4 mt-4 fw-bold fs-5">
            <li className="mb-2">Home</li>
            <li className="mb-2">Tentang Kami</li>
          </ul>
        </div>
      </div>
    </>
  );
}

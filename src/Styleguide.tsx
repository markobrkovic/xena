function Styleguide(): JSX.Element {
  return (
    <div
      style={{
        background: 'var(--color-background)',
        padding: '2rem',
        width: '45%',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: 'var(--color-primary)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-secondary)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-tertiary)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-tertiary-dark)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-tertiary-cold)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-quaternary)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-quaternary-light)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginTop: '.5rem',
          background: 'var(--color-text)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
        }}
      ></div>
      <h1 style={{ color: 'var(--color-text)', fontWeight: '300' }}>
        Heading 1
      </h1>
      <h2 style={{ color: 'var(--color-text)', fontWeight: '300' }}>
        Heading 2
      </h2>
      <h3 style={{ color: 'var(--color-text)', fontWeight: '300' }}>
        Heading 3
      </h3>
      <h4
        style={{
          color: 'var(--color-text)',
          fontWeight: '300',
          fontSize: 'var(--small)',
        }}
      >
        Heading 4
      </h4>
      <p
        style={{
          color: 'var(--color-text)',
          fontWeight: '300',
          fontSize: 'var(--medium)',
        }}
      >
        Paragraph
      </p>
      <a
        href=""
        style={{
          display: 'block',
          color: 'var(--color-text)',
          marginBottom: '1rem',
          textDecoration: 'none',
        }}
      >
        Link
      </a>
      <div
        style={{
          display: 'inline-block',
          background: 'var(--color-secondary)',
          width: '100px',
          height: '50px',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-tertiary)',
          width: '100px',
          height: '50px',
        }}
      ></div>
    </div>
  );
}

export default Styleguide;

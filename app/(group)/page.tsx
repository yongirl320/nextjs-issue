import Link from "next/link";
export default function Home() {

  const times = new Date().getTime();

  return (
      <div>
        <p>test - {times} </p>
        <br /><br />
        <div>
          <Link  prefetch={false} href="/?page=1">page1</Link>
          &nbsp;&nbsp;&nbsp;
          <Link prefetch={false} href="/?page=2">page2</Link>
          &nbsp;&nbsp;&nbsp;
          <Link prefetch={false} href="/?page=3">page3</Link>
        </div>

      </div>
  )
}

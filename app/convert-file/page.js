import CloudConvert from "cloudconvert";
const page = async () => {
  const cloudConvert = new CloudConvert(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmM0YTlhNmU5MjM4NGUyNjdhNjNlMjY1ZGQzNzZjY2I0M2YwZjYzMTg5YmJhNDU2MTc1YmVlODk5MGIxMTU1YjM1M2UzZDNiYzc2MTkzZTEiLCJpYXQiOjE3MTA4NDcwMDcuNzQxMzE4LCJuYmYiOjE3MTA4NDcwMDcuNzQxMzIsImV4cCI6NDg2NjUyMDYwNy43MzY2MTksInN1YiI6IjY0Mzk4ODc4Iiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay5yZWFkIiwid2ViaG9vay53cml0ZSIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.O0_UJkZMNb17Qy84QA79LtX9YMhE_T1i0LQ1a49ivDl_CXwoY5gzS1MWYM4vqa8eTKIYsljwXw2HmP4-QMoTMiPTBFxl37NmN4oNeONBMBFBBZw6fFbekaaNZ4-pM039thDZwXk1pl4PMujcoBsbofQEYxdR0m8u2ngOT01s-zHXzUAQFO98aGKva9Yg0KIeuWeBsWcbsb1Vg-9tf9jsm8nuBTZLFr_0GywinSwXnp1uvj4M4lggOKw3L4qlp-Sz7GViQ-ZwLOhGc744WtJAICIKeLQpJHf6GyxaghEGbhjnvY6pSR7ayuNhxLDHZXP66UV-b5_IGkNFMWFYv2zglCsVSTN02kVD2i0k_rR-KB7a0L5VUj0PXD0d8VFBLAQi79ihh_iNcqsOVleAZNX6fPAWcZY07IZG5a1WTMJGuvXS8tXdzgHmUMrwQ9NIk_74_oYz7bsu8E2NUDCd4bS1kjlRElLzmIFeDgFfipYwjV205GX9G2hfPm_HpOMtb8znLpqwLidS0EE1dhe5Ko7bVLElx225QPGtC-z4IPyIom7j7rmHJvqL3jA-nOuxLGmr5KLdHn5YPwwWLb7rEZmAERvSrDf8mmgW9uqt5TZxel4OQQ326XCMaMf2e4TLq_g8HLVRz8Ew59Byl5d6ZzE3HUtSVMurIoBNoz8-fMiZibU"
  );

  let job = await cloudConvert.jobs.create({
    tasks: {
      "import-task": {
        operation: "import/url",
        url: "https://drive.google.com/drive/folders/1ka9bBNkuFpBD5nd-RBV2FQf-_8SDnFgQ?usp=drive_link",
      },
      "convert-task": {
        operation: "convert",
        input: "import-task",
        output_format: "pdf",
      },
      "export-task": {
        operation: "export/url",
        input: "import-task",
      },
    },
  });
  job = await cloudConvert.jobs.wait(job.id);
  console.log(job.tasks[2].result)
  return <div>
    <a href={job.tasks[2].result.files[0].url}>Download</a>
  </div>;
};

export default page;

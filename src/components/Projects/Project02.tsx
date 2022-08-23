const Project1 = () => {
  return (
    <div>
      <p className="project__paragraph">
        The <strong>Colour Path</strong> is a project that builds a description
        of you from your first name, last name and birth date. It combines all
        these informations into digits that are associated with appropriate
        descriptions. We will detail how this is done below.
      </p>
      <h2 className="project__h2">Birth Date</h2>
      <p className="project__paragraph">
        The birth date is the easiest of the three values computed. You start
        with, say, <span>February 12, 1998</span>. Write it in number format:
        12/02/1998, then sum up all its digits: 1 + 2 + 0 + 2 + 1 + 9 + 9 + 8 =
        32. If the result contains only one digit, stop. Otherwise, add its
        digits together. Since 32 contains two digits, we sum them up: 3 + 2 =
        5. Now, since 5 only contains one digit, we stop. <br />
        Therefore, 5 is the digit associated to my birth date.
      </p>
    </div>
  );
};

export default Project1;

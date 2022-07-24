# Assignment 1.1
1. What is the main functionality of the browser?

    A web browser is an application software that is used to receive resources that are traversing through the World Wide Web (www). An information resource can be images, videos, web pages or any other content identified by URI. The web browser translates those files received from web server and display those content to the user and allow the client /user to access all other relevant resources & information via hyperlinks. To get the information it uses HTTP(HyperText Transfer Protocol) Protocol.

1. High Level Components of a browser.

    The browser's main components are:
    - The user interface
    - The browser engine
    - The rendering engine
    - Networking
    - Javascript interpreter
    - Data storage
    <br/><br/>

    ![Browser components](./Assets/Images/browser%20-components.avif "Browser components")

    <br/><br/>

1. Rendering engine and its use.

    The main purpose of the rendering engine is to load and display resources or content like HTML, XML, simple text and images. And with the help of extensions and plug-ins, we can extend the capabilities of rendering engine such as displaying PDF files, beautified JSON etc. Depending on the browser a single instance or multiple instances of the rendering engine may be active at a given point of time.
    <br/><br/>
    Rendering Engine main flow
    <br/><br/>

    ![Rendering Engine main flow](./Assets/Images/Rendering-Engine-Flow1.avif "Rendering Engine main flow")

    <br/><br/>

1. Parsers (HTML, CSS, etc)

    The main responsibility of a parser is to translate content from one form to another. The general flow of a parser is as follows:

    1. Translating the content into lexicals(lexical analysis)
    2. Validating the correctness(syntactical analysis)
    3. Generating the parse tree
    <br/><br/>

    In a browser we have multiple parsers with their dedicated responsibilities like HTML parser, CSS parser, script parser.

    HTML parser:

    The job of the HTML parser is to parse the HTML markup and build the DOM tree.

    HTML parsing flow
    <br/><br/>

    ![HTML parsing flow](./Assets/Images/HTML-parsing-flow.avif "HTML parsing flow")

    <br/><br/>

   CSS parser:

    The job of the CSS parser is to parse the stylesheets and creating the CSSOM tree.

    <br/>

1. Script Processors

    The script processor executes Javascript code to process an event.While the CSS is being parsed and the CSSOM created, other assets, including JavaScript files are downloading. JavaScript is interpreted, compiled, parsed and executed. The scripts are parsed into abstract syntax trees. Some browser engines take the Abstract Syntax Tree and pass it into an interpreter, outputting bytecode which is executed on the main thread. This is known as JavaScript compilation.

1. Order of script processing

    In general the scripts are executed synchronously in the order of their inclusion. Because of this sometimes parser halts the parsing of the document till the scripts are loaded from the network. To avoid this there are a few options like:

    - Adding 'defer' attribute to the scripts will postpone the execution till the document is fully parsed.
    - Marking scripts as asynchronous using 'async' keyword to load and execute the scripts on another thread.

    <br/>


1. Tree construction

    The Render tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of the tree is to enable painting the contents in their correct order.

    The DOM and CSSOM are combined to form the render tree.

    To construct the render tree the browser does the following:

    1. Starting at the root of the DOM tree, traverse each visible node.
        
        - Some nodes are not visible like script tags, meta tags etc. So they are omitted as they are not reflected in the rendered output.
        - Some nodes are hidden via CSS (Ex: using display: none property) and are also omitted from the render tree.

    1. For each visible node, find the appropriate CSSOM rules and apply them.
    1. Emit visible nodes with content and their computed styles.

    With the render tree in place, we can proceed to the "layout" stage. 

1. Layout and Painting

    Layout:

    When the render tree is created, it doesn't have a position and size. Calculating these values is called layout or reflow. To figure out the exact size and position of each object on the page, the browser begins at the root of the render tree and traverses it. The output of the layout process is a "box model," which precisely captures the exact position and size of each element within the viewport.

    Painting:

    Painting or rasterizing is the process of converting each ode in the render tree to actual pixels on the screen. After layout the browser calls the renderer'd paint() method to display content on screen. Painting uses the UI infrastructure component. 


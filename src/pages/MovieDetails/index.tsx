import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import placeholderImage from "@/assets/placeholder.svg";

const MovieDetails = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Movie details</CardTitle>
              <CardDescription>Deatails.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <img
                        alt="Movie Poster"
                        className="w-full h-auto rounded-lg shadow-lg"
                        height={600}
                        src={placeholderImage}
                        style={{
                          aspectRatio: "400/600",
                          objectFit: "cover",
                        }}
                        width={400}
                      />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold mb-2 sm:text-5xl">
                        The Shawshank Redemption
                      </h1>
                      <p className="text-gray-400 text-lg mb-4">Drama, 1994</p>
                      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            Release Date
                          </p>
                          <p>September 23, 1994</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Runtime</p>
                          <p>142 min</p>
                        </div>
                      </div>
                      <div className="mb-8 sm:text-lg">
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <button className="flex items-center justify-between w-full text-left">
                              <p className="text-gray-400">
                                Two imprisoned men bond over a number of years,
                                finding solace and eventual redemption through
                                acts of common decency.
                              </p>
                            </button>
                          </CollapsibleTrigger>
                        </Collapsible>
                        <div className="mt-4">
                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <button className="flex items-center justify-between w-full text-left text-gray-400 hover:text-gray-300">
                                <span>Read more</span>
                              </button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pt-4 text-gray-400">
                              <p>
                                The Shawshank Redemption is a 1994 American
                                drama film written and directed by Frank
                                Darabont, based on the 1982 Stephen King novella
                                Rita Hayworth and Shawshank Redemption. It tells
                                the story of Andy Dufresne, a banker who is
                                sentenced to life in Shawshank State
                                Penitentiary for the murders of his wife and her
                                lover, despite his claims of innocence. Over the
                                following two decades, he befriends a fellow
                                prisoner, contraband smuggler Ellis "Red"
                                Redding, and becomes instrumental in a
                                money-laundering operation within the prison.
                              </p>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Director</p>
                          <p>Frank Darabont</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Writer</p>
                          <p>
                            Stephen King (novella), Frank Darabont (screenplay)
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Cast</p>
                          <p>
                            Tim Robbins, Morgan Freeman, Bob Gunton, William
                            Sadler
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            IMDb Rating
                          </p>
                          <p>9.3/10</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Awards</p>
                          <p>
                            Nominated for 7 Oscars, including Best Picture. Won
                            2 Golden Globes.
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            Box Office
                          </p>
                          <p>$58.3 million</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">Footer</div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default MovieDetails;

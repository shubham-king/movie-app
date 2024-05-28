import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import PaginationComponent from "@/components/PaginationComponent";
import LoadingOverlay from "@/components/LoadingOverlay";

export function HomePage() {

  const handleSearch = (searchQuery: string) => {
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {isLoading && <LoadingOverlay />}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="galery">
            <div className="flex items-center">
              <SearchBar onSearch={handleSearch} defaultValue={query} />
              <div className="ml-auto flex items-center gap-2">
                <TabsList className="hidden sm:flex">
                  <TabsTrigger value="galery">Galery</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>
            </div>
            <TabsContent value="galery">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Movies Galery</CardTitle>
                  <CardDescription>
                    Browse a galery of our movies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MovieList />
                </CardContent>
                <CardFooter>
                  <PaginationComponent />
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="list">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Movies List</CardTitle>
                  <CardDescription>
                    Browse a list of our movies.
                  </CardDescription>
                </CardHeader>
                <CardContent>Movie list here...</CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

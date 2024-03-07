using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Text.Json.Serialization;

namespace Cooking.Models
{
    public class Playlist
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string userName { get; set; } = null!;

        [BsonElement("items")]
        [JsonPropertyName("items")]
        public List<string> movieIds { get; set; } = null!;
    }
}
